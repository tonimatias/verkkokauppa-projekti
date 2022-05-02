import axios from 'axios';
import CategoryList from '../components/CategoryList';
import React, { useEffect, useState } from 'react';

export default function ManageCategories({ url }) {
    const [newCategory, setNewCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [addingCategory, setAddingCategory] = useState(false);

    function saveCategory(e) {
        e.preventDefault();
        const json = JSON.stringify({ name: newCategory });
        axios.post(url + 'products/addcategory.php', json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setNewCategory('');
                setAddingCategory(false);
                setSelectedCategory(response.data);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }

    if (!addingCategory) {
        return (
            <>
                <h3 className='heading'>Kategorioiden ylläpito</h3>
                <div id="manage">
                    <label>Kategoriat: </label>
                    <CategoryList
                        url={url}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <button className="btn btn-dark" type="button" onClick={() => setAddingCategory(true)}>Lisää uusi kategoria</button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h3 className='heading'>Lisää kategoria</h3>
                <form onSubmit={saveCategory}>
                    <div id='manageForm'>
                        <div>
                            <label>Kategorian nimi</label>
                            <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                        </div>
                        <button className="btn btn-dark" type="button" onClick={() => setAddingCategory(false)}>Peruuta</button>
                        <button className="btn btn-dark" type="submit">Tallenna</button>
                    </div>
                </form>
            </>
        )
    }
}
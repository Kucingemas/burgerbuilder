import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingedKey => {
        return [...Array(props.ingredients[ingedKey])].map((_, i) => {
            return <BurgerIngredient key = {ingedKey + i} type = {ingedKey}></BurgerIngredient>
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please Add Ingredient(s)</p>
    }

    console.log(transformedIngredients);
    
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type = "bread-top"></BurgerIngredient>
             {transformedIngredients}
            <BurgerIngredient type = "bread-bottom"></BurgerIngredient>
        </div>
    );
}

export default burger;
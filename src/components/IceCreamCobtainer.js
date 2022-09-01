import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux'

const IceCreamCobtainer = (props) => {
    const iceCreamState = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num IceCream - {iceCreamState}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Icecream</button>
        </div>
    );
};

export default IceCreamCobtainer;
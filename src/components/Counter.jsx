import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {
    const count = useSelector((state) => {
        return state.counter.value;
    });

    console.log(count);

    const dispatch = useDispatch(); 

    return (
        <div className='flex flex-row m-5 align-middle justify-center p-3 border-purple-400 mt-25'>
            <div className='m-3 border-2 to to-black text-2xl'>
                <button onClick={() => dispatch(increment())}>Increment</button>
            </div>
            <div className='text-3xl m-3 font-bold'>{count}</div>
            <div className='m-3 border-2 to to-black text-2xl'>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;

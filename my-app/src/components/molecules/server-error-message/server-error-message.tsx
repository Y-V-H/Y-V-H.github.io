import React, {useState, useEffect} from 'react';

type ServerErrorMessageProps = {
    message: string[]
}

export const ServerErrorMessage = ( { message }: any ) => {
    const [isShowMessage, setIsShowMessage] = useState('');
    const handlerClick = () => setIsShowMessage(null)

    useEffect(
        () => setIsShowMessage(message)
    ,[message])

    return (
        !!isShowMessage ? (<div className='m-serm'>
            <ul className='m-serm__list'>{message.map( (el:any) => <li>{el}</li>)}</ul>
            <button className='m-serm__btn icon icon-cancel' onClick={handlerClick}/>
        </div>) : null
    )
}
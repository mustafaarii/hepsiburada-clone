import React, { FC } from 'react';
import ILink from '../models/ILink';
import { ITopLink } from '../models/ITopLink';

export const Toplink : FC<ITopLink> = ({links}) => {

    return (
        <>
            {
            links.map((link:ILink) =>
                <a 
                href={link.link}
                className= {`pl-3 pr-3 text-xs font-semibold ${link.color ? link.color : 'text-gray-400'}`}
                >
                {link.label}
                </a>
            )
            }   
        </>
    );
}

Toplink.defaultProps = {

}
import React from 'react';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
    <Wrapper>
        <Flex>
            <Details>
                <span>
                    &copy; All rights are reserved | {new Date().getFullYear()}{' '}
                    | Made with{' '}
                    <span aria-label="love" role="img">
                        💖
                    </span>{' '}
                    by{' '}
                    <a
                        href="https://tysian.pl/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Jakub Bazgier
                    </a>
                </span>
            </Details>
            <Links>
                {social.map(({ id, name, link /* icon */ }) => (
                    <a
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`follow me on ${name}`}
                    >
                        {/* 
                            TODO:
							Put icons in assets/icons and update social.json
							<img width="24" src={icon} alt={name} /> 
						*/}
                    </a>
                ))}
            </Links>
        </Flex>
    </Wrapper>
);

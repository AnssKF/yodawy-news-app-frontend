import React, { FunctionComponent } from 'react';
import { IHeadLine } from '../../../../core/interfaces/headline';
import { Card, Badge } from 'react-bootstrap';

import './HeadlineCard.scss'
import { truncateText } from '../../../../core/functions';

type THeadLineCardComponentProps = {
    headline: IHeadLine,
    showFav?: boolean,
    favClicked?: (type: 'add' | 'remove', payload:IHeadLine) => void
}

export const HeadLineCard: FunctionComponent<THeadLineCardComponentProps> = ({headline, showFav, favClicked}) => {

    const favBadgeClicked = (type: 'add' | 'remove') => {
        if(favClicked) {
            if(type === 'add'){
                favClicked('add', headline)
                return;
            }

            if(type === 'remove'){
                favClicked('remove', headline)
                return;
            }
        }
    }

    return (
        <Card className="c__card headline shadow p-3 rounded-0 border-0">

            <div className="">
                <div 
                    className="text-center font-weight-lighter p-3 c__card__title headline__img mb-3"
                    style={{backgroundImage: 'url(' + headline.urlToImage + ')',}}>
                </div>
                <div>
                    {
                        !!headline?.liked && showFav?
                            <Badge variant="success" className="cur-pointer mr-2" onClick={()=>favBadgeClicked('remove')}>
                                Favoriet
                            </Badge>
                        : showFav ?
                            <Badge variant="secondary" className="cur-pointer mr-2" onClick={()=>favBadgeClicked('add')}>
                                Add To Favoriets
                            </Badge>
                        : ''
                        }
                    {
                        !!headline.author?
                            <Badge variant="dark" className="headline__author mr-2" dangerouslySetInnerHTML={{__html: headline.author}}>
                            </Badge>
                        : ''
                    }
                    {
                        !!headline.publishedAt?
                            <Badge variant="dark" className="headline__publishedAt">
                                { new Date(headline.publishedAt).toLocaleDateString() }
                            </Badge>
                        : ''
                    }
                </div>
                <div>
                    <h1 className="headline__title">{headline.title}</h1>
                    {
                        !!headline.description ?
                            <p>
                                {truncateText(headline.description, 250)} 

                                {
                                    !!headline.url?
                                        <small><a href={headline.url} target="_blank" rel="noopener noreferrer"> readmore…</a></small>
                                    : ''
                                }
                            </p>
                        : ''
                    }
                </div>
            </div>

        </Card>
    )
}
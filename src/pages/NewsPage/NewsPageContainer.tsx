import React, { FunctionComponent, useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { HeadLineCard } from './components/HeadlineCard/HeadlineCard';
import { LayoutComponent } from '../../core/components/Layout/LayoutComponent';
import { useHeadlines } from '../../core/services/headlines/store';
import { FetchHeadlines, AddHeadlinesToFav, RemoveHeadlinesRfomFav } from '../../core/services/headlines';
import { useAuth } from '../../core/services/auth/store';
import { IHeadLine } from '../../core/interfaces/headline';

type TNewsPageContainerProps = {
}

export const NewsPageContainer: FunctionComponent<TNewsPageContainerProps> = () => {

    const [authState, setAuthState] = useAuth()
    const [news, setNews] = useHeadlines();

    const [category, setCategory] = useState<string>('business')
    const categories: string[] = [
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology',
    ]

    const [country, setCountry] = useState<string>('eg')
    const countries: string[] = [
        'eg',
        'ae'
    ]

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await FetchHeadlines({category, country}, authState.access_token);
                setNews(res)
            }catch(e) {
                setNews([])
            }
        }

        fetch()
    }, [authState.access_token, category, country, setNews])


    const favClicked = async (type: 'add' | 'remove', headline:IHeadLine) => {
        try {
            if(type === 'add'){
                await AddHeadlinesToFav(headline, authState.access_token)

                const updatedData = news.map((_)=>{
                    if(_.url === headline.url && _.publishedAt === headline.publishedAt){
                        _.liked = true;
                    }
                    return _;
                })
                setNews(updatedData)
                return
            }

            if(type === 'remove'){
                await RemoveHeadlinesRfomFav(headline, authState.access_token)
                const updatedData = news.map((_)=>{
                    if(_.url === headline.url && _.publishedAt === headline.publishedAt){
                        _.liked = false;
                    }
                    return _;
                })
                setNews(updatedData)
                return
            }

        }catch(e) {
        }
    }

    return (
        <LayoutComponent>
            <Container className="pt-5">
                <Row className="justify-content-center mb-3">
                    <Col>

                        <Dropdown className="d-inline mr-2">
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    categories.map( (category, i) => (
                                        <Dropdown.Item key={i} onClick={ ($e) => setCategory(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</Dropdown.Item>
                                    ))
                                }
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className="d-inline mr-2">
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                {country}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    countries.map( (country, i) => (
                                        <Dropdown.Item key={i} onClick={ ($e) => setCountry(country)}>{country}</Dropdown.Item>
                                    ))
                                }
                            </Dropdown.Menu>
                        </Dropdown>

                        {
                            !authState.access_token?
                            <small>You need to login to add items to Favorit</small>
                            : ''
                        }

                    </Col>
                </Row>
                {
                    !news.length?
                        <Row>
                            <Col className="text-center">
                                There is data available right now.
                            </Col>
                        </Row>
                    :
                    <Row>

                        <Col xs={10} md={6}>
                            {
                                news.map((_, i) => {
                                    let node;
                                    if (i % 2) {

                                        node = (
                                            <div className="pb-3" key={i}>
                                                <HeadLineCard headline={_} showFav={!!authState.access_token} favClicked={favClicked}/>
                                            </div>
                                        )
                                    }
                                    return node;
                                })
                            }
                        </Col>

                        <Col xs={10} md={6}>
                            {
                                news.map((_, i) => {
                                    let node;
                                    if (!(i % 2)) {

                                        node = (
                                            <div className="pb-3" key={i}>
                                                <HeadLineCard headline={_} showFav={!!authState.access_token} favClicked={favClicked}/>
                                            </div>
                                        )
                                    }
                                    return node;
                                })
                            }
                        </Col>
                    </Row>
                }
            </Container>
        </LayoutComponent>
    )
}
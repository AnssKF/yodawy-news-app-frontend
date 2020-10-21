import React, { FunctionComponent, useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { IHeadLine } from '../../core/interfaces/headline';
import { HeadLineCard } from './components/HeadlineCard/HeadlineCard';

type TNewsPageContainerProps = {
}

export const NewsPageContainer: FunctionComponent<TNewsPageContainerProps> = () => {

    const news: IHeadLine[] = [
        {
            "source": {
                "id": null,
                "name": "Youm7.com"
            },
            "author": null,
            "title": "أول تعليق من الراقصة لورديانة بعد سيطرتها على السوشيال ميديا يومين.. فيديو - اليوم السابع",
            "description": "في أول تعليق من الراقصة البرازيلية لورديانة علي سيطرة فيديو رقصها علي مواقع التواصل الاجتماعي اليومين الماضيين، وجهت الشكر لكل من دعمها، وقالت في فيديو لها.",
            "url": "https://www.youm7.com/story/2020/10/21/أول-تعليق-من-الراقصة-لورديانة-بعد-سيطرتها-على-السوشيال-ميديا/5030418",
            "urlToImage": "https://img.youm7.com/large/202010201058525852.jpg",
            "publishedAt": "2020-10-21T07:10:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Youm7.com"
            },
            "author": null,
            "title": "الأرصاد تتوقع اليوم أمطارا غزيرة على السواحل الشمالية ورعدية على أقصى الغرب - اليوم السابع",
            "description": "توقعت هيئة الأرصاد الجوية أن يسود، اليوم، الأربعاء، طقس مائل للحرارة على القاهرة والرياح معتدلة، وطقس مائل للحرارة على الوجه البحرى، وأمطار خفيفة إلى متوسطة، والرياح معتدلة..",
            "url": "https://www.youm7.com/story/2020/10/21/الأرصاد-تتوقع-اليوم-أمطارا-غزيرة-على-السواحل-الشمالية-ورعدية-على/5029627",
            "urlToImage": "https://img.youm7.com/large/201902150148404840.jpg",
            "publishedAt": "2020-10-21T06:00:00Z",
            "content": "\" – – \" .\r\n80% \" – – \" ..\r\n: 31 21 28 21 24 19 37 20 37 21 39 24 ."
        },
    ]

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

    return (
        <Container className="pt-5">
            <Row className="justify-content-center mb-3">
                <Col>

                    <Dropdown className="d-inline mr-2">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                categories.map( category => (
                                    <Dropdown.Item onClick={ ($e) => setCategory(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</Dropdown.Item>
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
                                countries.map( country => (
                                    <Dropdown.Item onClick={ ($e) => setCountry(country)}>{country}</Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>


                </Col>
            </Row>
            <Row>

                <Col xs={10} md={6}>
                    {
                        news.map((_, i) => {
                            let node;
                            if (i % 2) {

                                node = (
                                    <div className="pb-3">
                                        <HeadLineCard headline={_} />
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
                                    <div className="pb-3">
                                        <HeadLineCard headline={_} />
                                    </div>
                                )
                            }
                            return node;
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}
import React from 'react'
import './styles.scss';
import { HeadLine } from '../base/headLine/HeadLine';
import Card from './Card';


function Pricing() {
    return (
            <div className="pricing">
                <div className="pricing-container">
                    <HeadLine
                        headLineStyle="hl--r"
                        headerText="Choose Your Plan"/>

                    <div className="cards">
                        <Card title="Free"
                        price="0"
                        options={{
                            0:{
                                active:true,
                                text:"1 user at the same time"
                            },
                            1:{
                                active:true,
                                text:"Basic Protection"
                            },
                            2:{
                                active:true,
                                text:"1 Server with 2 Cores and 512 MB of RAM"
                            },
                            3:{
                                active:true,
                                text:"5 GB of storage"
                            },
                            4:{
                                active:true,
                                text:"Community support"
                            },
                            5:{
                                active:false,
                                text:"With files version control"
                            }
                        }}></Card>

                        <Card title="Basic"
                        price="19"
                        options={{
                            0:{
                                active:true,
                                text:"1 user at the same time"
                            },
                            1:{
                                active:true,
                                text:"Basic Protection"
                            },
                            2:{
                                active:true,
                                text:"1 Server with 2 Cores and 512 MB of RAM"
                            },
                            3:{
                                active:true,
                                text:"5 GB of storage"
                            },
                            4:{
                                active:true,
                                text:"Community support"
                            },
                            5:{
                                active:false,
                                text:"With files version control"
                            }
                        }}></Card>

                        <Card title="Premium"
                        price="49"
                        options={{
                            0:{
                                active:true,
                                text:"1 user at the same time"
                            },
                            1:{
                                active:true,
                                text:"Basic Protection"
                            },
                            2:{
                                active:true,
                                text:"1 Server with 2 Cores and 512 MB of RAM"
                            },
                            3:{
                                active:true,
                                text:"5 GB of storage"
                            },
                            4:{
                                active:true,
                                text:"Community support"
                            },
                            5:{
                                active:false,
                                text:"With files version control"
                            }
                        }}></Card>
                    </div>
                    <p>Etiam in pharetra massa. Sed eu pretium ipsum, semper pulvinar libero. Sed nisl eros, pellentesque sit amet sodales nec.</p>
                </div>
            </div>
    )
}

export default React.memo(Pricing)

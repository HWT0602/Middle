import { Link } from 'react-router-dom';

export default function Guitar() {
    return (
        <div className="guitar">
            <div className="product-text">
                <div className="line"></div>
                <h1>吉他</h1>
                <div className="line"></div>
            </div>

            <div className="product-container">

                <div className="product-item row">
                    <div className="product-item-link col">
                        <div className="product-item-pic">
                        <Link to="detail">
                                <img src="/img/guitar 1.jpg" width="273px" height="334px" alt="guitar" />
                            </Link>
                        </div>
                        <Link to="detail">
                            <div className="product-item-text">
                                <p>Ibanez Q547-BMM 七弦無頭電吉他 藍色</p>
                            </div>
                        </Link>
                        <div className="item-detail row">
                            <Link to="detail" className="col-6" >
                                <div className="price">
                                    <p>NT$37800</p>
                                </div>
                            </Link>
                            <Link to="detail" className="col-1">
                                <div className="buy-car">
                                    <img src="/img/shopptin cart.png" width="44px" height="44px" alt="車車" />
                                </div>
                            </Link>
                            <div className="col-2"></div>
                        </div>
                    </div>
                    <div className="product-item-link col">
                        <div className="product-item-pic">
                            <Link to="detail">
                                <img src="/img/guitar 2.jpg" width="273px" height="334px" alt="guitar" />
                            </Link>
                        </div>
                        <Link to="detail" >
                            <div className="product-item-text">
                                <p>Fender MIJ AERODYNE II STRAT HSS RW AWT 日廠 電吉他 白色</p>
                            </div>
                        </Link>
                        <div className="item-detail row">
                            <Link to="detail" className="col-6" >
                                <div className="price">
                                    <p>NT$36000</p>
                                </div>
                            </Link>
                            <Link to="detail" className="col-1">
                                <div className="buy-car">
                                    <img src="/img/shopptin cart.png" width="44px" height="44px" alt="車車" />
                                </div>
                            </Link>
                            <div className="col-2"></div>
                        </div>
                    </div>
                    <div className="product-item-link col">
                        <div className="product-item-pic">
                            <Link to="detail">
                                <img src="/img/guitar 3.jpg" width="273px" height="334px" alt="guitar" />
                            </Link>
                        </div>
                        <Link to="detail" >
                            <div className="product-item-text">
                                <p>Ibanez RGDR4427FX 日廠 七弦電吉他 血肉果汁機代言琴</p>
                            </div>
                        </Link>
                        <div className="item-detail row">
                            <Link to="detail" className="col-6" >
                                <div className="price">
                                    <p>NT$69800</p>
                                </div>
                            </Link>
                            <Link to="detail" className="col-1">
                                <div className="buy-car">
                                    <img src="/img/shopptin cart.png" width="44px" height="44px" alt="車車" />
                                </div>
                            </Link>
                            <div className="col-2"></div>
                        </div>
                    </div>
                    <div className="product-item-link col">
                        <div className="product-item-pic">
                            <Link to="detail">
                                <img src="/img/guitar 4.jpg" width="273px" height="334px" alt="guitar" />
                            </Link>
                        </div>
                        <Link to="detail">
                            <div className="product-item-text">
                                <p>Edwards E-LP-130CD BK 電吉他</p>
                            </div>
                        </Link>
                        <div className="item-detail row">
                            <Link to="detail" className="col-6" >
                                <div className="price">
                                    <p>NT$32800</p>
                                </div>
                            </Link>
                            <Link to="detail" className="col-1">
                                <div className="buy-car">
                                    <img src="/img/shopptin cart.png" width="44px" height="44px" alt="車車" />
                                </div>
                            </Link>
                            <div className="col-2"></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="see-more">
                <div className="see-more-text">
                    <a href="#" >查看更多</a>
                </div>
            </div>
        </div>

    );
}
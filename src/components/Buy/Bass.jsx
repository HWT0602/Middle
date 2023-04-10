import { Link } from 'react-router-dom';

export default function Bass() {
    return (

        <div className="bass">
            <div className="product-text">
                <div className="line"></div>
                <h1>貝斯</h1>
                <div className="line"></div>
            </div>

            <div className="product-container">

                <div className="product-item row">
                    <div className="product-item-link col">
                        <div className="product-item-pic">
                            <Link to="detail">
                                <img src="/img/bass 1.jpg" width="273px" height="334px" alt="guitar" />
                            </Link>
                        </div>
                        <Link to="detail" >
                            <div className="product-item-text">
                                <p>Fender MIJ Hama Okamoto Precision Bass OWT 電貝斯</p>
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
                                <img src="/img/bass 2.jpg" width="273px" height="334px" alt="guitar" />
                            </Link>
                        </div>
                        <Link to="detail" >
                            <div className="product-item-text">
                                <p>YAMAHA BBNE2 Nathan East 簽名款 BASS 電貝斯</p>
                            </div>
                        </Link>
                        <div className="item-detail row">
                            <Link to="detail" className="col-6" >
                                <div className="price">
                                    <p>NT$99000</p>
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
                                <img src="/img/bass 3.jpg" width="273px" height="334px" alt="guitar" />
                            </Link>
                        </div>
                        <Link to="detail" >
                            <div className="product-item-text">
                                <p>Ibanez EHB1265MS-NML 電貝斯 無頭琴 摩卡色</p>
                            </div>
                        </Link>
                        <div className="item-detail row">
                            <Link to="detail" className="col-6" >
                                <div className="price">
                                    <p>NT$47800</p>
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
                                <img src="/img/bass 4.jpg" width="273px" height="334px" alt="guitar" />
                            </Link>
                        </div>
                        <Link to="detail" >
                            <div className="product-item-text">
                                <p>IBANEZ EHB1005MS-SFM BASS 無頭五弦電貝斯 綠色</p>
                            </div>
                        </Link>
                        <div className="item-detail row">
                            <Link to="detail" className="col-6" >
                                <div className="price">
                                    <p>NT$43800</p>
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
import TradeCard from "./TradeCard";
import React from "react";

function TradePage(props) {
    return (
        <div>
            <div style={{
                width: "70%",
                margin: "0 auto",
            }}>
                <div
                    style={{
                        display: "flex",
                    }}>
                    <TradeCard
                        image="https://m.petinzooshop.com/web/product/medium/202112/bcc63c62c303ccba8054f172df6e43e9.jpg"
                        title="볼파이튼 12g"
                        price="120000원"
                        link="#"
                    />
                    <TradeCard
                        image="https://m.더쥬.com/web/product/big/202212/b87b5ae42d28668752daa32d3f96774d.jpg"
                        title="볼파이튼 15g"
                        price="100000원"
                        link="#"
                    />
                    <TradeCard
                        image="https://www.popco.net/zboard/data/dica_forum_panasonic/2018/05/17/17606681335afc480f23961.jpg"
                        title="볼파이튼 10g"
                        price="140000원"
                        link="#"
                    />
                    <TradeCard
                        image="https://cdn-pro-web-216-165.cdn-nhncommerce.com/cocktailteam_godomall_com/data/goods/19/01/03/1000001557/1000001557_detail_044.jpg"
                        title="콘스네이크 10g"
                        price="120000원"
                        link="#"
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                    }}>
                    <TradeCard
                        image="https://m.petinzooshop.com/web/product/medium/202112/bcc63c62c303ccba8054f172df6e43e9.jpg"
                        title="볼파이튼 12g"
                        price="120000원"
                        link="#"
                    />
                    <TradeCard
                        image="https://m.더쥬.com/web/product/big/202212/b87b5ae42d28668752daa32d3f96774d.jpg"
                        title="볼파이튼 15g"
                        price="100000원"
                        link="#"
                    />
                    <TradeCard
                        image="https://www.popco.net/zboard/data/dica_forum_panasonic/2018/05/17/17606681335afc480f23961.jpg"
                        title="볼파이튼 10g"
                        price="140000원"
                        link="#"
                    />
                    <TradeCard
                        image="https://cdn-pro-web-216-165.cdn-nhncommerce.com/cocktailteam_godomall_com/data/goods/19/01/03/1000001557/1000001557_detail_044.jpg"
                        title="콘스네이크 10g"
                        price="120000원"
                        link="#"
                    />
                </div>
            </div>

        </div>

    );
}

export default TradePage;
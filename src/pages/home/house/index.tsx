import React from 'react';
import {FenceBlock, FrameBlock, FrameImg, HouseBlock, RoofBlock, WrapperHouse} from "./style";

const House = () => {
    return (
        <HouseBlock>
            <WrapperHouse>
                <RoofBlock>
                    <div>
                        <p>Дмитрий Зайцев</p>
                        <p>Frontend developer (Junior)</p>
                    </div>
                </RoofBlock>
                <FrameBlock>
                    <FrameImg src='/photo/iam1.jpg'/>
                </FrameBlock>
            </WrapperHouse>
            <FenceBlock>
                <ul>
                    <li><p>Ссылки на мои проекты (GitHub):</p></li>
                    <li/>
                    <li/>
                    <li/>
                    <li><a href='https://github.com/d1mag1c/TMS_2_SCSS'>Курсовой (HTML/CSS)</a></li>
                    <li><a href='https://github.com/Wildberries-Team/wildberries'>Курсовой, командный (JS)</a></li>
                    <li><a href='https://github.com/d1mag1c/TMS_hw_React'>Практика на курсах (React, TS)</a></li>
                    <li><a href='https://github.com/d1mag1c/TMS_graduation_project'>Дипломный (React, TS)</a></li>
                    <li><a href='https://github.com/d1mag1c/My_business_card'>Сайт-визитка (React, TS)</a></li>
                    <li><p>Будущий проект :)</p></li>
                </ul>
            </FenceBlock>
        </HouseBlock>
    );
};

export default House;
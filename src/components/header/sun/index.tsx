import React, {useState} from 'react';
import {SunBlock, TextList} from "./style";

const Sun = () => {
    const [stateQuality, setStateQuality] = useState(false)
    return (
        <SunBlock>
            <TextList onClick={() => setStateQuality(state => !state)} stateQuality={stateQuality}>
                <li><p>Мои качества</p><p>Нажми на солнце:)</p></li>
                <li>Ответственный</li>
                <li>Целеустремленный</li>
                <li>Перспективный</li>
                <li>Быстрообучаемый</li>
                <li>Коммуникабельный</li>
                <li>Честный</li>
            </TextList>
        </SunBlock>
    );
};

export default Sun;
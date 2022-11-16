import { Card } from "../../models/city-card.model";

export const CARDS: Card[] = [
    { picture_path: '../../../assets/images/min_temperature.png', info_text: 'min', info_value: '10°C', picture_alt_text: 'Min Temperature' },
    { picture_path: '../../../assets/images/max_temperature.png', info_text: 'max', info_value: '19°C', picture_alt_text: 'Max Temperature' },
    { picture_path: '../../../assets/images/humidity.png', info_text: 'humidity', info_value: '92%', picture_alt_text: 'Humidity' },
    { picture_path: '../../../assets/images/wind.png', info_text: 'wind', info_value: '11.32 km/h', picture_alt_text: 'Wind Strength' },
]
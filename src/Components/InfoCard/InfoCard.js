import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import {langTokens} from '../../Locales/localization';
import {Rating} from '@material-ui/lab';
import {useTranslation} from 'react-i18next';

export const InfoCard = ({item}) => {
    const { t } = useTranslation();
    const genre = (itemGenres) => itemGenres.join(' | ');
    return (
        <Card>
            <CardContent>
                <Typography variant={'h3'}>
                    {t(langTokens.main.showInfo)}
                </Typography>
                {item?.runtime && <Typography variant={'h5'}>
                    {t(langTokens.main.average, {show: item})}
                </Typography>}
                {item?.webChannel && (
                    <Typography variant={'h5'}>
                        {t(langTokens.main.webChannel, { show: item })}
                    </Typography>
                )}
                {item?.type && <Typography variant={'h5'}>
                    {t(langTokens.main.type, {show: item})}
                </Typography>}
                {item?.status && (
                    <Typography variant={'h5'}>
                        {t(langTokens.main.status, { show: item })}
                    </Typography>
                )}
                {item?.genres && (
                    <Typography variant={'h5'}>
                        {t(langTokens.main.genre, { genre: genre(item?.genres) })}
                    </Typography>
                )}
                {item?.rating?.average && (
                    <Rating
                        defaultValue={item?.rating?.average}
                        max={10}
                        readOnly
                        precision={0.1}
                    />
                )}
            </CardContent>
        </Card>
    );
};


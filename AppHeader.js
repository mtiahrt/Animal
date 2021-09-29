import React, {useContext} from 'react'
import { Appbar } from 'react-native-paper';
import {HeaderTitleContext} from './Contexts/HeaderContext'

function AppHeader() {
    const headerTitle = useContext(HeaderTitleContext)
    const _goBack = () => console.log('Went back');
    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Shown more');
    console.log('Header rendering ', headerTitle)
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title={headerTitle} subtitle="Subtitle" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
    );
}

export default AppHeader

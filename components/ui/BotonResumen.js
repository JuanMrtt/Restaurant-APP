import React, { useContext } from 'react'
import { Button, Text } from 'native-base'
import globalStyles from '../../styles/global'
import { useNavigation } from '@react-navigation/native'
import PedidosContext from '../../context/pedidos/PedidosContext'

const BotonResumen = () => {
    const navigation = useNavigation()

    // Leer el objeto de pedido
    const { pedido } = useContext(PedidoContext)

    if (pedido.length === 0) return null

    return (
        <Button
            style={globalStyles.button}
            onPress={() => navigation.navigate('ResumenPedido')}
        >
            <Text style={globalStyles.buttonText}>Ir a Pedido</Text>
        </Button>
    )
}

export default BotonResumen

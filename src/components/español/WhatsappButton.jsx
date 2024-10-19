import { FloatingWhatsApp } from 'react-floating-whatsapp'



const WhatsappButton = () => {
    return (
        <FloatingWhatsApp
            phoneNumber='+5491166863363'
            accountName="Fusion"
            statusMessage=""
            chatMessage="¡Hola! ¿Cómo podemos ayudarte?"
            placeholder="Escribe un mensaje..."
            avatar='https://res.cloudinary.com/dpmum6s9p/image/upload/v1728956135/fusionWeb/1726514781610_vlk7kk.webp'
        />
    )
}

export default WhatsappButton
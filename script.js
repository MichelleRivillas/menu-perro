const  abierto  =  documento . getElementById ( 'abrir' )
const  cerrar  =  documento . getElementById ( 'cerrar' )
const  contenedor  =  documento . querySelector ( '.contenedor' )

abierto _ addEventListener ( 'clic' ,  ( )  =>  contenedor . classList . add  ( 'show-nav' ) )

cerrar _ addEventListener ( 'clic' ,  ( )  =>  contenedor . classList . remove  ( 'show-nav' ) )

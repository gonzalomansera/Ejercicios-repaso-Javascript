# Manual configurar github por ssh

## Instalacion de la clave en GitHub

En primer lugar debemos comprobar si tenemos clave ssh. En caso de no tener clave la creamos con el comando 
```bash
ssh-keygen -t ed25519 -C "tucorreodegithub@gmail.com".
```
Con este comando veremos como se han generado 2 claves. Una de ellas va a tener extensión .pub (Pública) y la otra no va a tener extension (Privada).

Cuando tengamos la clave copiamos la clave pública y entramos en github. Una vez dentro de github nos vamos a nuestro perfil -> Settings -> SSH and GPG Keys -> Add New SSH Key y ya le ponemos el titulo y pegamos nuestra clave.  
![imagen ssh](/img/imagenSSH.png)
## Añadir la clave a Agent 


Para añadir la clave a Agent debemos iniciar el servicio con el comando 
```bash 
Get-Service ssh-agent | Set-Service -StartupType Automatic

ssh-add ~/.ssh/id_ed25519

```

 ![imagen ssh](/img/Powershell.png)

## Verificar la clave 
Ya por último verificamos que todo ha salido bien con el comando 
```bash

ssh -T git@github.com
```
 que sirve para hacer una conexión mediante SSH en caso de que al ejecutar este comando te muestra un mensaje dándote un saludo.

 ![imagen ssh](/img/conexion.png)

 #### Made By Gonzalo Mansera
function initFacebookSdk() {
    var appId = '1527373191185974';
   
    $.ajaxSetup({ cache: true });
    $.getScript('https://connect.facebook.net/en_US/sdk.js', function() {
        // Inicializa o SDK do Facebook
        FB.init({
            appId: appId,
            cookie: true,
            xfbml: true,
            version: 'v12.0'
        });
    });
}

// Função para lidar com o login do Facebook
function loginWithFacebook() {
    FB.login(function(response) {
        if (response.authResponse) {
            var accessToken = response.authResponse.accessToken;

            // Exemplo de como usar o token de acesso
            console.log('Token de Acesso: ' + accessToken);

            // Obter informações do usuário
            FB.api('/me', { fields: 'id,name,email' }, function(response) {
                console.log('Bem-vindo, ' + response.name + '!');
                console.log('Seu email é: ' + response.email);
            });

        } else {
            console.log('Login com Facebook cancelado.');
        }
    }, { scope: 'email,public_profile' });
}

// Inicializa o SDK do Facebook quando o documento estiver pronto
$(document).ready(function() {
    initFacebookSdk();
});
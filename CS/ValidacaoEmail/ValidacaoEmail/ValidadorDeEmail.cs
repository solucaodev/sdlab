using System.Text.RegularExpressions;

namespace ValidacaoEmail
{
    public class ValidadorDeEmail
    {
        public static bool EmailValido(string email)
        {
            if ((email == null) || (email.Length < 4))
                return false;

            var partes = email.Split('@');
            if (partes.Length < 2 ) return false;

            var pre = partes[0];
            if (pre.Length == 0) return false;

            var validadorPre = new Regex("^[a-zA-Z0-9_.-/+]+$");
            if (!validadorPre.IsMatch(pre))
                return false;

            // gmail.com, outlook.com, terra.com.br, etc.
            var partesDoDominio = partes[1].Split('.');
            if (partesDoDominio.Length < 2 ) return false;

            var validadorDominio = new Regex("^[a-zA-Z0-9-]+$");
            for ( int indice = 0; indice < partesDoDominio.Length; indice++ )
            {
                var parteDoDominio = partesDoDominio[indice];

                // Evitando @gmail...com
                if (parteDoDominio.Length == 0) return false;  

                if (!validadorDominio.IsMatch(parteDoDominio))
                    return false;
            }

            return true;
        }
    }
}
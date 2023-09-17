using System.Text.RegularExpressions;

namespace ValidacaoEmail
{
    public class ValidadorDeEmail
    {
        public static bool EmailValido(string email)
        {
            if ((email == null) || email.Length < 4)
                return false;
            
            var validador = new Regex("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
            return validador.Match(email).Success;
        }
    }
}
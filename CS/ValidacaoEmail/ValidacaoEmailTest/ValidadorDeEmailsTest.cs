using ValidacaoEmail;

namespace ValidacaoEmailTest
{
    [TestClass]
    public class ValidadorDeEmailsTest
    {
        [TestMethod]
        public void ValidarEmailsDeTeste()
        {
            // Retorna Válidos
            ValidadorDeEmail.EmailValido("1@1.com").Should().BeTrue();
            ValidadorDeEmail.EmailValido("jose123@outlook.com").Should().BeTrue();
            ValidadorDeEmail.EmailValido("jose123@pm.me").Should().BeTrue();
            ValidadorDeEmail.EmailValido("j@j.com").Should().BeTrue();
            ValidadorDeEmail.EmailValido("joaovs@gmail.com").Should().BeTrue();
            ValidadorDeEmail.EmailValido("jon@sc.gov.br").Should().BeTrue();
            ValidadorDeEmail.EmailValido("jon@x.com").Should().BeTrue();

            // Retorna Inválido
            ValidadorDeEmail.EmailValido("j@j").Should().BeFalse();
            ValidadorDeEmail.EmailValido("@gmail...com").Should().BeFalse();
            ValidadorDeEmail.EmailValido("@gmail.com").Should().BeFalse();
            ValidadorDeEmail.EmailValido("joaovs@.com").Should().BeFalse();
            ValidadorDeEmail.EmailValido("joaovs@@.com").Should().BeFalse();
            ValidadorDeEmail.EmailValido("joaovs*gmail.com").Should().BeFalse();
            ValidadorDeEmail.EmailValido("joaovs-gmail.com").Should().BeFalse();
            ValidadorDeEmail.EmailValido("joaovs.gmail.com").Should().BeFalse();
            ValidadorDeEmail.EmailValido("https://solucao.dev").Should().BeFalse();
        }
    }
}
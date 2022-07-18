using Bogus;
using Microsoft.AspNetCore.Mvc;
using React.Net.Simple.ViewModels;

namespace React.Net.Simple.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ReactDotNet()
        {
            return View(GetModel());
        }

        public IActionResult Habitat()
        {
            return View(GetModel());
        }

        public IActionResult HybridPage()
        {
            return View(GetModel());
        }

        private static HomePageModel GetModel()
        {
            var header = new Header(
                "https://images.ctfassets.net/sejp9n42frnn/5Xn59S0apgKU7dmCEGt8B0/ae562627a0a0040a2b15edcbc985720a/logo-dark.png",
                "Technical Dogsbody");

            var hero = new Faker<Hero>()
                .RuleFor(h => h.BackgroundUrl, f => f.Image.PicsumUrl(width: 1920, height: 1080))
                .RuleFor(h => h.Heading, f => f.Company.CompanyName())
                .RuleFor(h => h.Body, f => f.Company.CatchPhrase());

            var intro = new Faker<Intro>()
                .RuleFor(i => i.IntroTitle, f => f.Rant.Review())
                .RuleFor(i => i.IntroText, f => f.Lorem.Paragraphs(separator: "<br /><br />"));

            var freetext = new Faker<Freetext>()
                .RuleFor(f => f.Body, f => f.Lorem.Paragraphs(count: 5, separator: "<br /><br />"));

            var model = new HomePageModel(header, hero, intro, freetext);
            return model;
        }
    }
}
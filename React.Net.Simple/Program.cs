using JavaScriptEngineSwitcher.Extensions.MsDependencyInjection;
using JavaScriptEngineSwitcher.V8;
using Newtonsoft.Json;
using React.AspNet;
using System.IO.Compression;
using WebMarkupMin.AspNet.Brotli;
using WebMarkupMin.AspNet.Common.Compressors;
using WebMarkupMin.AspNet.Common.UrlMatchers;
using WebMarkupMin.AspNetCore6;
using WebMarkupMin.Core;
using WebMarkupMin.NUglify;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var services = builder.Services;

services.AddControllersWithViews();
services.AddJsEngineSwitcher(options => options.DefaultEngineName = V8JsEngine.EngineName)
    .AddV8();
services.AddReact();
services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

// Add WebMarkupMin services.
services.AddWebMarkupMin(options =>
{
    options.AllowMinificationInDevelopmentEnvironment = true;
    options.AllowCompressionInDevelopmentEnvironment = true;
})
    .AddHtmlMinification(options =>
    {
        options.ExcludedPages = new List<IUrlMatcher>
        {
            new WildcardUrlMatcher("/minifiers/x*ml-minifier"),
            new ExactUrlMatcher("/contact")
        };

        HtmlMinificationSettings settings = options.MinificationSettings;
        settings.RemoveRedundantAttributes = true;
        settings.RemoveHttpProtocolFromAttributes = true;
        settings.RemoveHttpsProtocolFromAttributes = true;

        options.CssMinifierFactory = new NUglifyCssMinifierFactory();
        options.JsMinifierFactory = new NUglifyJsMinifierFactory();
    })
    .AddXhtmlMinification(options =>
    {
        options.IncludedPages = new List<IUrlMatcher>
        {
            new WildcardUrlMatcher("/minifiers/x*ml-minifier"),
            new ExactUrlMatcher("/contact")
        };

        XhtmlMinificationSettings settings = options.MinificationSettings;
        settings.RemoveRedundantAttributes = true;
        settings.RemoveHttpProtocolFromAttributes = true;
        settings.RemoveHttpsProtocolFromAttributes = true;

        options.CssMinifierFactory = new KristensenCssMinifierFactory();
        options.JsMinifierFactory = new CrockfordJsMinifierFactory();
    })
    .AddXmlMinification(options =>
    {
        XmlMinificationSettings settings = options.MinificationSettings;
        settings.CollapseTagsWithoutContent = true;
    })
    .AddHttpCompression(options =>
    {
        options.CompressorFactories = new List<ICompressorFactory>
        {
            new BrotliCompressorFactory(new BrotliCompressionSettings
            {
                Level = 4
            }),
            new DeflateCompressorFactory(new DeflateCompressionSettings
            {
                Level = CompressionLevel.Optimal
            }),
            new GZipCompressorFactory(new GZipCompressionSettings
            {
                Level = CompressionLevel.Optimal
            })
        };
    })
    ;
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseReact(config =>
{
    config
        .SetReuseJavaScriptEngines(true)
        .SetLoadBabel(false)
        .SetLoadReact(false)
        .AddScriptWithoutTransform("~/scripts/component.bundle.js");

    config.JsonSerializerSettings.NullValueHandling = NullValueHandling.Ignore;
    config.JsonSerializerSettings.DefaultValueHandling = DefaultValueHandling.Ignore;
});

app.UseRouting();

app.UseAuthorization();

app.UseWebMarkupMin();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

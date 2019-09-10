using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace HubPagesSlider
{
    public class Program
    {
        public static void Main(string[] args)
            => CreateHostBuilder(args).Build().Run();

        public static IWebHostBuilder CreateHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder()
                .UseStartup<Startup>();
    }
}

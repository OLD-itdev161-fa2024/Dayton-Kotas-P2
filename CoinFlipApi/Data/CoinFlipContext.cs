using Microsoft.EntityFrameworkCore;
using CoinFlipApi.Models;

namespace CoinFlipApi.Data
{
    public class CoinFlipContext : DbContext
    {
        public CoinFlipContext(DbContextOptions<CoinFlipContext> options) : base(options) { }

        public DbSet<CoinFlipResult> CoinFlipResults { get; set; }
    }
}

using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using CoinFlipApi.Models;
using CoinFlipApi.Data;

namespace CoinFlipApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CoinFlipController : ControllerBase
    {
        private readonly CoinFlipContext _context;

        public CoinFlipController(CoinFlipContext context)
        {
            _context = context;
        }

        // Flip a coin and save the result
        [HttpGet("flip")]
        public ActionResult<CoinFlipResult> FlipCoin()
        {
            var result = new CoinFlipResult
            {
                Outcome = RandomCoinFlip()
            };

            _context.CoinFlipResults.Add(result);
            _context.SaveChanges();

            return Ok(result);
        }

        // Retrieve the history of all coin flips
        [HttpGet("results")]
        public ActionResult GetAllResults()
        {
            var results = _context.CoinFlipResults.ToList();
            return Ok(results);
        }

        // Delete all coin flip results
        [HttpDelete("delete")]
        public ActionResult DeleteAllResults()
        {
            _context.CoinFlipResults.RemoveRange(_context.CoinFlipResults);
            _context.SaveChanges();

            return Ok("All coin flip results deleted.");
        }

        private string RandomCoinFlip()
        {
            Random random = new Random();
            return random.Next(2) == 0 ? "Heads" : "Tails";
        }
    }
}

import { findGameById } from '../src/api/games/find-game-by-id';

// findGameByIds([18, 19], {
//   comments: true,
//   historical: true,
//   stats: true,
// })
await findGameById(396989, {
  comments: true,
  stats: true,
})
// findGame('stroganov')
// findCollection('vanskillz')
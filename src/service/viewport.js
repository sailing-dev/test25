// import { combineLatest } from 'rxjs';
// import { shareReplay, bufferCount, pluck, map, filter } from 'rxjs/operators';
// import { resizeObserver, scrollObserver } from './window';

// export const viewportObserver = combineLatest(resizeObserver, scrollObserver)
//   .pipe(
//     shareReplay({
//       refCount: true,
//       bufferSize: 1
//     })
//   );

// export const directionDetectionObserver =
//   viewportObserver
//     .pipe(pluck(1))
//     .pipe(pluck('direction'))
//     .pipe(bufferCount(3, 1))
//     .pipe(map((buffer) => buffer.reduce((result, direction) => result + direction.y, 0) / buffer.length))
//     .pipe(filter((direction) => !(direction % 1)))
//     .pipe(
//       shareReplay({
//         refCount: true,
//         bufferSize: 1
//       })
//     );

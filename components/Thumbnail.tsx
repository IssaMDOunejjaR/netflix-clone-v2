import Image from 'next/image';
import { baseUrl } from '../constants/movie';
import { Movie } from '../types';

interface Props {
	movie: Movie;
}

export default function Thumbnail({ movie }: Props) {
	return (
		<div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
			<Image
				src={`http://image.tmdb.org/t/p/w500${
					movie.backdrop_path || movie.poster_path
				}`}
				layout="fill"
				className="rounded-sm object-cover md:rounded"
			/>
		</div>
	);
}

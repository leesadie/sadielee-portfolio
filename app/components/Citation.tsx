'use client';

type CitationProps = {
    ids: number[];
}

export default function Citation({ ids }: CitationProps) {
    return (
        <sup className="mr-1 text-sm text-blue-400">
            {ids.map((id, index) => (
                <span key={id}>
                    <a href={`#fn${id}`} className="hover:text-blue-500 transition duration-200">
                        {id}
                    </a>
                    {index < ids.length - 1 && ", "}
                </span>
            ))}
        </sup>
    );
}
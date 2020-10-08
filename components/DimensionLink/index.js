import slug from 'limax';
import Link from 'next/link';

const DimensionLink = ({dimension, children}) => {
    if (dimension && dimension.length > 0) {
        return (
            <Link href={`/dimension/[...slug]?id=${dimension}`} as={`/dimension/${slug(dimension)}?id=${dimension}`}>
                <a>{children}</a>
            </Link>
        );
    } else {
        return (
            <Link href={`/dimension/[...slug]?id=unknown`} as={`/dimension/unknown?id=unknown`}>
                <a>Unknown</a>
            </Link>
        );
    }
    
};

export default DimensionLink;
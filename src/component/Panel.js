import classNames from 'classNames';

const Panel = ({children, className, ...rest}) => {

    const finalClassNames = classNames('', className);

    return (
        <>
            <div {...rest} className={finalClassNames}>{children}</div>
        </>
    )
}

export default Panel
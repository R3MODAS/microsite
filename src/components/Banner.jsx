const Banner = (props) => {

    const { heading, para, bannerImg } = props;

    return (
        <section id="banner">
            <div className="container">
                <div className="masterplan-text">
                    <h1 className="text-color-3 inter-semi masterplan-heading">{heading}</h1>
                    <p className="common-p aspekta-reg text-color-4">{para}</p>
                </div>
            </div>
            <div className="container-fluid p-0">
                <img src={bannerImg} alt="img" className="img-fluid" loading="lazy" />
            </div>
        </section>
    )
}

export default Banner
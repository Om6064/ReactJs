const FaqLeft = () => {
    return (
        <div class="faq-contact-card">
            <div class="card-icon">
                <i class="bi bi-question-circle fs-1"></i>
            </div>
            <div class="card-content mt-3">
                <h3 className="fw-bold mb-3">Still Have Questions?</h3>
                <p className="mb-4">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum.</p>
                <div class="contact-options">
                    <a href="#" class="contact-option mb-3">
                        <i class="bi bi-envelope"></i>
                        <span>Email Support</span>
                    </a>
                    <a href="#" class="contact-option mb-3">
                        <i class="bi bi-chat-dots"></i>
                        <span>Live Chat</span>
                    </a>
                    <a href="#" class="contact-option mb-3">
                        <i class="bi bi-telephone"></i>
                        <span>Call Us</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FaqLeft
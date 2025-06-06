const FaqLeft = () => {
    return (
        <div class="faq-contact-card d-flex flex-column text-white shadow rounded-2">
            <div class="card-icon">
                <i class="bi bi-question-circle fs-1"></i>
            </div>
            <div class="card-content mt-3">
                <h3 className="fw-bold mb-3">Still Have Questions?</h3>
                <p className="mb-4">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum.</p>
                <div class="contact-options">
                    <div class="contact-option d-flex align-items-center rounded-3 text-white gap-3 hover-title mb-3">
                        <i class="bi bi-envelope"></i>
                        <span>Email Support</span>
                    </div>
                    <div class="contact-option d-flex align-items-center rounded-3 text-white gap-3 hover-title mb-3">
                        <i class="bi bi-chat-dots"></i>
                        <span>Live Chat</span>
                    </div>
                    <div class="contact-option d-flex align-items-center rounded-3 text-white gap-3 hover-title mb-3">
                        <i class="bi bi-telephone"></i>
                        <span>Call Us</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqLeft
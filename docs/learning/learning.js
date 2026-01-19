// Learning page specific JavaScript

// Load and display testimonials from YAML
async function loadTestimonials() {
    try {
        // Load js-yaml library from CDN
        if (typeof jsyaml === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js';
            document.head.appendChild(script);
            await new Promise(resolve => script.onload = resolve);
        }
        
        const response = await fetch('data/testimonials.yaml');
        const yamlText = await response.text();
        const data = jsyaml.load(yamlText);
        
        const testimonialsContainer = document.getElementById('testimonials-grid');
        
        data.testimonials.forEach(testimonial => {
            const card = document.createElement('div');
            card.className = 'feature-card';
            
            const quote = document.createElement('p');
            quote.style.fontStyle = 'italic';
            quote.style.marginBottom = '1rem';
            quote.textContent = `"${testimonial.quote}"`;
            
            const author = document.createElement('p');
            const strong = document.createElement('strong');
            strong.textContent = `- ${testimonial.author}`;
            author.appendChild(strong);
            
            card.appendChild(quote);
            card.appendChild(author);
            testimonialsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading testimonials:', error);
        document.getElementById('testimonials-grid').innerHTML = 
            '<p>Unable to load testimonials at this time.</p>';
    }
}

// Load testimonials when page loads
document.addEventListener('DOMContentLoaded', loadTestimonials);

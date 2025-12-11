/* Research Process Section */
.research-process {
    padding: 100px 0;
    background-color: #f8fafc;
}

.process-timeline {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    max-width: 800px;
    margin: 50px auto 0;
    position: relative;
}

.process-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
    width: 2px;
    background: rgba(0, 122, 141, 0.2);
    z-index: 1;
}

.process-step {
    display: flex;
    gap: 30px;
    position: relative;
    z-index: 2;
}

.step-number {
    width: 80px;
    height: 80px;
    background: var(--accent);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 600;
    flex-shrink: 0;
}

.step-content {
    flex: 1;
    padding-top: 15px;
}

.step-content h3 {
    font-size: 1.3rem;
    color: var(--primary-dark);
    margin-bottom: 15px;
}

.step-content p {
    color: var(--text-medium);
    line-height: 1.6;
    margin-bottom: 20px;
}

.step-tools {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.tool-tag {
    background: rgba(0, 122, 141, 0.1);
    color: var(--accent);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
}

.process-cta {
    text-align: center;
    margin-top: 60px;
}

/* Team Publications Section */
.team-publications {
    padding: 100px 0;
    background-color: white;
}

.publications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.publication-card {
    background: white;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.publication-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 122, 141, 0.2);
}

.publication-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(0, 122, 141, 0.1);
    color: var(--accent);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    margin-bottom: 20px;
}

.publication-badge i {
    font-size: 0.9rem;
}

.publication-card h3 {
    font-size: 1.3rem;
    color: var(--primary-dark);
    margin-bottom: 15px;
    line-height: 1.4;
}

.publication-meta {
    display: flex;
    gap: 15px;
    font-size: 0.9rem;
    color: var(--text-light);
    margin-bottom: 15px;
}

.publication-excerpt {
    color: var(--text-medium);
    line-height: 1.6;
    margin-bottom: 20px;
}

.publication-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--accent);
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
}

.publication-link:hover {
    color: var(--hover-accent);
}

.publication-link i {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
}

.publication-link:hover i {
    transform: translateX(3px);
}

.publications-cta {
    text-align: center;
    margin-top: 60px;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
    .research-process,
    .team-publications {
        padding: 80px 0;
    }
}

@media (max-width: 768px) {
    .process-timeline {
        max-width: 600px;
    }
    
    .process-timeline::before {
        left: 35px;
    }
    
    .step-number {
        width: 70px;
        height: 70px;
        font-size: 1.8rem;
    }
    
    .publications-grid {
        grid-template-columns: 1fr;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }
}

@media (max-width: 480px) {
    .research-process,
    .team-publications {
        padding: 60px 0;
    }
    
    .process-step {
        flex-direction: column;
        gap: 15px;
    }
    
    .step-number {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
    }
    
    .process-timeline::before {
        left: 30px;
    }
    
    .publication-card {
        padding: 25px;
    }
}
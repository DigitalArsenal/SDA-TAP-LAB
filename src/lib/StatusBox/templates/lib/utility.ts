// Function to calculate lifespan based on perigee
export function calculateLifespan(perigee: number) {
    const LEO_PERIGEE = 500; // LEO reference perigee in km (now set to 500 km)
    const GEO_PERIGEE = 35786; // GEO reference perigee in km
    const LEO_LIFESPAN = 5; // LEO lifespan in years
    const GEO_LIFESPAN = 15; // GEO lifespan in years

    // Adjust these factors to control the curve
    const factor = 0.0000000004;

    if (perigee <= LEO_PERIGEE) return LEO_LIFESPAN;
    if (perigee >= GEO_PERIGEE) return GEO_LIFESPAN;

    // Linear mapping for lifespan (can be adjusted for more complexity)
    return (
        LEO_LIFESPAN +
        ((GEO_LIFESPAN - LEO_LIFESPAN) * (perigee - LEO_PERIGEE)) /
        (GEO_PERIGEE - LEO_PERIGEE)
    );
}
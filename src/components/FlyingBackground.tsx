export default function FlyingBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Large glowing orbs */}
            <div 
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse-slow" 
            />
            <div 
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-600/10 blur-[150px] animate-pulse-slow" 
                style={{ animationDelay: '-5s' }}
            />
            
            {/* Flying Elements */}
            <div 
                className="absolute top-[20%] left-[10%] w-32 h-32 border border-indigo-500/20 rounded-3xl animate-float"
                style={{ animationDuration: '25s' }}
            />
            <div 
                className="absolute top-[60%] right-[15%] w-24 h-24 border border-violet-500/20 rounded-full animate-float"
                style={{ animationDuration: '22s', animationDelay: '-2s' }}
            />
            <div 
                className="absolute bottom-[20%] left-[20%] w-40 h-40 border border-cyan-500/20 rounded-[40px] rotate-45 animate-float"
                style={{ animationDuration: '30s', animationDelay: '-7s' }}
            />
            
            {/* Smaller sparkles or particles */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                    }}
                />
            ))}
        </div>
    );
}

export default function CodeCard() {
    return (
        <pre className="bg-[#1A1B26] text-[14px] text-white rounded-2xl p-8 w-full lg:w-1/2">
            <span className="block text-[#565f89]">// Life</span>
            <span className="text-[#bb9af7]">function</span><span className="text-[#7dcfff]"> main()</span><span className="text-[#9aa5ce]">{' {'}</span>
            <span className="block pl-4 text-[#bb9af7]">while <span className="text-[#9aa5ce]">{'(self.'}</span><span className="text-[#7dcfff]">isAlive</span><span className="text-[#9aa5ce]">{'()) {'}</span></span>
            <span className="block pl-8 text-[#bb9af7]">self.<span className="text-[#7dcfff]">eat</span><span className="text-[#9aa5ce]">();</span></span>
            <span className="block pl-8 text-[#bb9af7]">self.<span className="text-[#7dcfff]">sleep</span><span className="text-[#9aa5ce]">();</span></span>
            <span className="block pl-8 text-[#bb9af7]">self.<span className="text-[#7dcfff]">code</span><span className="text-[#9aa5ce]">();</span></span>
            <span className="block pl-4 text-[#9aa5ce]">{'}'}</span>
            <span className="block pl-4 text-[#bb9af7]">return <span className="text-[#7dcfff]">true</span><span className="text-[#9aa5ce]">;</span></span>
            <span className="block text-[#9aa5ce]">{'}'}</span>
        </pre>
    )
}




const SectionHeading = ({heading, count, slug}:{heading:string, count:number, slug:string}) => {
    return (
        <div>
             <div className="flex items-end justify-between ">
                  <p className="font-mono text-[11px] text-slate-700">
                    {`>> ${slug}`}
                  </p>

                  <p className="font-mono text-4xl text-[#787878]">[{count}]</p>
                </div>

                <div className="mt-4">
                    <p className="font-poppins text-black font-extrabold text-3xl">{heading}</p>
                    <p className="text-[9px] text-[#121212]/40 mt-1">##################################</p>
                </div>

        </div>
    )
}

export default SectionHeading;
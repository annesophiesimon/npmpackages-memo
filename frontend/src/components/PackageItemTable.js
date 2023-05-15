import HeadTable from './HeadTable';
import BodyTable from './BodyTable';

const PackageItemTable = ({npmpackages}) => {
    return (
            <div className="w-screen shadow-md overflow-x-auto">
                <table className="w-full text-sm text-gray-500 dark:text-gray-400">
                <HeadTable />
                {npmpackages.length &&
                    npmpackages.map((npmpackage) => {
                       return  <BodyTable key={npmpackage._id} datas={npmpackage}/>
                    })
                }
                </table >
            </div>

    )
}

export default PackageItemTable;


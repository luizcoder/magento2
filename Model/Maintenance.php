<?php

namespace MundiPagg\MundiPagg\Model;

use Mundipagg\Core\Maintenance\Services\InfoBuilderService;
use MundiPagg\MundiPagg\Api\MaintenanceInterface;
use MundiPagg\MundiPagg\Concrete\Magento2CoreSetup;

class Maintenance
    implements MaintenanceInterface
{
    /**
     * @param mixed $params
     * @return array
     */
    public function index($params)
    {
        $baseParams = explode ('&', $params);
        $coreParams = [];
        foreach ($baseParams as $baseParam) {

            $pair = explode('=' ,$baseParam);
            $key = array_shift($pair);
            $value = implode('=', $pair);

            $coreParams[$key] = $value;
        }


        Magento2CoreSetup::bootstrap();

        $infoBuilder = new InfoBuilderService();

        $info = $infoBuilder->buildInfoFromQueryArray($coreParams);

        $response = $info;
        if (is_array($info)) {
            $response = json_encode($info, JSON_PRETTY_PRINT);
        }

        echo $response;

        die(0);
    }
}
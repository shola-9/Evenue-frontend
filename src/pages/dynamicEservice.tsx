import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/event/card";
import { ErrMsg } from "../components/global/errMsg";
import { GroupSuggestions } from "../components/groups/suggestions";
import getEServiceFUInfoFn from "../lib/eventsShowcase/getFUInfo";
import { ResEventServiceFUInfo } from "../typesAndInterfaces/eventServices/getFUInfo";
import styles from "./styles/dynamicEServiceNF3.module.css";

export const DynamicServiceProvides = () => {
  const { eservice_id } = useParams();
  const [resSProvider, setResSProvider] = useState<ResEventServiceFUInfo>();
  const [errMsg, setErrMsg] = useState("");

  if (!eservice_id) {
    throw new Error("Missing event_id");
  }

  useEffect(() => {
    try {
      getEServiceFUInfoFn({ sProvider_id: eservice_id, setErrMsg }).then(
        (res) => {
          res && setResSProvider(res);
        }
      );
    } catch (error) {}
  }, [eservice_id]);

  const cardContent = resSProvider?.result.map((eSerive) => (
    <Card
      key={eSerive.id}
      {...eSerive}
    />
  ));

  return (
    <div className={styles.containerNF3}>
      {errMsg ? (
        <ErrMsg errMsg={errMsg} />
      ) : (
        <>
          {cardContent}
          {/* <p>Review component heresdf</p> */}
          <GroupSuggestions />
        </>
      )}
    </div>
  );
};

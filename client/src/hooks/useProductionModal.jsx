import { useToast, useDisclosure } from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { postProductions } from 'utils/api/productions';
import { useQuery } from 'react-query';
import { getParts } from 'utils/api/parts';

const useProductionModal = () => {
  const { isSuccess: isSuccessPart, data: dataPart } = useQuery('parts', getParts);
  const partType = ['handle_bar', 'wheels', 'chain', 'frame', 'pedal', 'brakes', 'seat', 'fork'];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [form, setForm] = useState('Part');
  const productionRef = useRef();
  const colorRef = useRef();
  const quantityRef = useRef();
  const statusRef = useRef();
  const nameRef = useRef();
  const descriptionRef = useRef();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const assemblyMachineRef = useRef();
  const noteRef = useRef();
  const qualityRef = useRef();
  const profitMarginRef = useRef();
  const gradeRef = useRef();
  const finishRef = useRef();
  const weightAmountRef = useRef();
  const weightTypeRef = useRef();
  const handleBarRef = useRef();
  const wheelRef = useRef();
  const chainRef = useRef();
  const frameRef = useRef();
  const pedalRef = useRef();
  const brakesRef = useRef();
  const seatRef = useRef();
  const forkRef = useRef();

  const formStyle = {
    display: 'flex',
    'flex-direction': 'row',
  };

  const elementStyle = {
    'padding-top': '5px',
    'padding-right': '10px',
    'padding-bottom': '5px',
    'padding-left': '0px',
  };

  const handleStartDateInput = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateInput = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (form === 'Part') {
        await postProductions({
          type: form,
          componentDetail: {
            type: productionRef.current.value,
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            quality: qualityRef.current.value,
            color: colorRef.current.value,
            grade: gradeRef.current.value,
            finish: finishRef.current.value,
            profitMargin: profitMarginRef.current.value,
          },
          status: statusRef.current.value,
          quantity: quantityRef.current.value,
          startDate: startDate,
          endDate: endDate,
          assemblyMachine: assemblyMachineRef.current.value,
          note: noteRef.current.value,
        });
      }
      if (form === 'Bike') {
        await postProductions({
          type: form,
          componentDetail: {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            weightAmount: weightAmountRef.current.value,
            weightType: weightTypeRef.current.value,
            color: colorRef.current.value,
            profitMargin: profitMarginRef.current.value,
            parts: {
              handle_bar: handleBarRef.current.value,
              wheels: wheelRef.current.value,
              chain: chainRef.current.value,
              frame: frameRef.current.value,
              pedal: pedalRef.current.value,
              brakes: brakesRef.current.value,
              seat: seatRef.current.value,
              fork: forkRef.current.value,
            },
          },
          status: statusRef.current.value,
          quantity: quantityRef.current.value,
          startDate: startDate,
          endDate: endDate,
          assemblyMachine: assemblyMachineRef.current.value,
          note: noteRef.current.value,
        });
      }
      toast({
        title: 'Production placed',
        description: 'Production successfully placed',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch {
      toast({
        position: 'top',
        title: 'An error occurred.',
        description: 'Unable to produce entity .',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return {
    isSuccessPart,
    dataPart,
    formStyle,
    elementStyle,
    partType,
    isOpen,
    onOpen,
    onClose,
    form,
    setForm,
    productionRef,
    colorRef,
    quantityRef,
    statusRef,
    nameRef,
    descriptionRef,
    startDate,
    endDate,
    assemblyMachineRef,
    noteRef,
    qualityRef,
    profitMarginRef,
    gradeRef,
    finishRef,
    weightAmountRef,
    weightTypeRef,
    handleBarRef,
    wheelRef,
    chainRef,
    frameRef,
    pedalRef,
    brakesRef,
    seatRef,
    forkRef,
    handleStartDateInput,
    handleEndDateInput,
    handleSubmit,
  };
};

export default useProductionModal;
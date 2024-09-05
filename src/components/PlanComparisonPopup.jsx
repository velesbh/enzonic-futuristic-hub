import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PlanComparisonPopup = ({ isOpen, onClose, planComparison }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Plan Comparison</DialogTitle>
          <DialogDescription className="text-gray-300">
            Compare our different hosting tiers to find the best fit for your needs.
          </DialogDescription>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Feature</TableHead>
              <TableHead className="text-white">Budget</TableHead>
              <TableHead className="text-white">Normal</TableHead>
              <TableHead className="text-white">Extreme</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Price per GB RAM</TableCell>
              <TableCell>{planComparison.budget.pricePerGB}</TableCell>
              <TableCell>{planComparison.normal.pricePerGB}</TableCell>
              <TableCell>{planComparison.extreme.pricePerGB}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">CPU</TableCell>
              <TableCell>{planComparison.budget.cpu}</TableCell>
              <TableCell>{planComparison.normal.cpu}</TableCell>
              <TableCell>{planComparison.extreme.cpu}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Dedicated IP</TableCell>
              <TableCell>{planComparison.budget.dedicatedIP}</TableCell>
              <TableCell>{planComparison.normal.dedicatedIP}</TableCell>
              <TableCell>{planComparison.extreme.dedicatedIP}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default PlanComparisonPopup;

// <div className="space-y-2">
// <Label htmlFor="end_data">
//   End of Data Segment
//   <span className="ml-1 text-xs text-muted-foreground">
//     (0x08000000–0xC0000000)
//   </span>
// </Label>
// <Input
//   id="end_data"
//   name="end_data"
//   type="text"
//   value={formData.end_data}
//   onChange={handleChange}
//   // pattern="^0x[0-9A-Fa-f]+$"
//   required
// />
// <p className="text-xs text-muted-foreground">
//   Hex address marking the end of the process’s data
//   segment.
// </p>
// </div>

// <div className="space-y-2">
// <Label htmlFor="shared_vm">
//   Shared Virtual Memory
//   <span className="ml-1 text-xs text-muted-foreground">
//     (0–1,048,576 KB)
//   </span>
// </Label>
// <Input
//   id="shared_vm"
//   name="shared_vm"
//   type="number"
//   value={formData.shared_vm}
//   onChange={handleChange}
//   min="0"
//   max="1048576"
//   required
// />
// <p className="text-xs text-muted-foreground">
//   Memory shared among processes.
// </p>
// </div>

// <div className="space-y-2">
// <Label htmlFor="exec_vm">
//   Executable Virtual Memory
//   <span className="ml-1 text-xs text-muted-foreground">
//     (0–524,288 KB)
//   </span>
// </Label>
// <Input
//   id="exec_vm"
//   name="exec_vm"
//   type="number"
//   value={formData.exec_vm}
//   onChange={handleChange}
//   min="0"
//   max="524288"
//   required
// />
// <p className="text-xs text-muted-foreground">
//   Size of executable code in virtual memory.
// </p>
// </div>

// <div className="space-y-2">
// <Label htmlFor="mm_users">
//   Memory Manager Users
//   <span className="ml-1 text-xs text-muted-foreground">
//     (1–500)
//   </span>
// </Label>
// <Input
//   id="mm_users"
//   name="mm_users"
//   type="number"
//   value={formData.mm_users}
//   onChange={handleChange}
//   min="1"
//   max="500"
//   required
// />
// <p className="text-xs text-muted-foreground">
//   Number of processes using the same memory manager.
// </p>
// </div>

// <div className="space-y-2">
// <Label htmlFor="reserved_vm">
//   Reserved Virtual Memory
//   <span className="ml-1 text-xs text-muted-foreground">
//     (0–1,048,576 KB)
//   </span>
// </Label>
// <Input
//   id="reserved_vm"
//   name="reserved_vm"
//   type="number"
//   value={formData.reserved_vm}
//   onChange={handleChange}
//   min="0"
//   max="1048576"
//   required
// />
// <p className="text-xs text-muted-foreground">
//   Reserved virtual memory not currently in use.
// </p>
// </div>

// <div className="space-y-2">
// <Label htmlFor="map_count">
//   Memory Map Count
//   <span className="ml-1 text-xs text-muted-foreground">
//     (1–10,000)
//   </span>
// </Label>
// <Input
//   id="map_count"
//   name="map_count"
//   type="number"
//   value={formData.map_count}
//   onChange={handleChange}
//   min="1"
//   max="10000"
//   required
// />
// <p className="text-xs text-muted-foreground">
//   Number of virtual memory mappings for the process.
// </p>
// </div>

// <div className="space-y-2">
// <Label htmlFor="last_interval">
//   Last Interval
//   <span className="ml-1 text-xs text-muted-foreground">
//     (0–3600 seconds)
//   </span>
// </Label>
// <Input
//   id="last_interval"
//   name="last_interval"
//   type="number"
//   value={formData.last_interval}
//   onChange={handleChange}
//   min="0"
//   max="3600"
//   required
// />
// <p className="text-xs text-muted-foreground">
//   Time in seconds since the last relevant system event.
// </p>
// </div>

// <div className="space-y-2">
// <Label htmlFor="total_vm">
//   Total Virtual Memory
//   <span className="ml-1 text-xs text-muted-foreground">
//     (0–2,097,152 KB)
//   </span>
// </Label>
// <Input
//   id="total_vm"
//   name="total_vm"
//   type="number"
//   value={formData.total_vm}
//   onChange={handleChange}
//   min="0"
//   max="2097152"
//   required
// />
// <p className="text-xs text-muted-foreground">
//   Total virtual memory in use by the process.
// </p>
// </div>

// <div className="space-y-2">
// <Label htmlFor="nivcsw">
//   Involuntary Context Switches
//   <span className="ml-1 text-xs text-muted-foreground">
//     (0–100,000)
//   </span>
// </Label>
// <Input
//   id="nivcsw"
//   name="nivcsw"
//   type="number"
//   value={formData.nivcsw}
//   onChange={handleChange}
//   min="0"
//   max="100000"
//   required
// />
// <p className="text-xs text-muted-foreground">
//   Times process was preempted involuntarily by the OS
//   scheduler.
// </p>
// </div>



    // // Priority: lower static priority → higher threat
    // score += data.static_prio < 20 ? 0.1 : 0;

    // // User time: unusually high utime may indicate heavy computation
    // score += data.utime > 100 ? 0.05 : 0;

    // // Free area cache: low free memory can indicate memory pressure
    // score += data.free_area_cache < 500 ? 0.05 : 0;

    // // Voluntary context switches: very high may be abnormal
    // score += data.nvcsw > 50 ? 0.1 : 0;

    // // VM truncate count: high count can indicate memory tampering
    // score += data.vm_truncate_count > 10 ? 0.1 : 0;

    // // Major faults: high value can suggest I/O or memory issues
    // score += data.maj_flt > 5 ? 0.1 : 0;

    // // End of data segment: very high might suggest obfuscation
    // score += data.end_data > 0x10000000 ? 0.05 : 0;

    // // Shared VM: unusually high could suggest multi-process manipulation
    // score += data.shared_vm > 1000 ? 0.05 : 0;

    // // Executable VM: high value might suggest code loading
    // score += data.exec_vm > 1000 ? 0.1 : 0;

    // // MM users: high number of processes sharing memory
    // score += data.mm_users > 3 ? 0.05 : 0;

    // // Reserved VM: high amount of reserved memory
    // score += data.reserved_vm > 500 ? 0.05 : 0;

    // // Map count: too many memory maps can be suspicious
    // score += data.map_count > 50 ? 0.15 : 0;

    // // Last interval: very small interval might be aggressive behavior
    // score += data.last_interval < 5 ? 0.05 : 0;

    // // Total VM: very large memory space
    // score += data.total_vm > 5000 ? 0.15 : 0;

    // // Involuntary context switches: frequent forced context switches
    // score += data.nivcsw > 10 ? 0.1 : 0;




      // add("end_data", data.end_data, data.end_data > 0x10000000, 0.05);
    // add("shared_vm", data.shared_vm, data.shared_vm > 1000, 0.05);
    // add("exec_vm", data.exec_vm, data.exec_vm > 1000, 0.1);
    // add("mm_users", data.mm_users, data.mm_users > 3, 0.05);
    // add("reserved_vm", data.reserved_vm, data.reserved_vm > 500, 0.05);
    // add("map_count", data.map_count, data.map_count > 50, 0.15);
    // add("last_interval", data.last_interval, data.last_interval < 5, 0.05);
    // add("total_vm", data.total_vm, data.total_vm > 5000, 0.15);
    // add("nivcsw", data.nivcsw, data.nivcsw > 10, 0.1);